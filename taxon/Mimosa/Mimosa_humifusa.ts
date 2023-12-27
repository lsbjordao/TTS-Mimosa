// Import genus Mimosa
import { Mimosa } from '.'

// Import characters
import { 
    Stems, 
    Trichomes,
    Prickles,
    Stipule, 
    Leaf, 
    Inflorescence, 
    Flower,
    Androecium,
    Ginoecium,
    Fruit
} from '../../characters/v1'
import { Bipinnate, Petiole } from '../../characters/v1/Leaf'
import { Rachis, Pinnae } from '../../characters/v1/Leaf/Bipinnate'
import { Spicule } from '../../characters/v1/Leaf/Bipinnate/Rachis/Spicule'
import { Rachilla, Leaflet, Paraphillidia } from '../../characters/v1/Leaf/Bipinnate/Pinnae'
import {
    AdaxialLeaflet, 
    AbaxialLeaflet, 
    MarginLeaflet
} from '../../characters/v1/Leaf/Bipinnate/Pinnae/Leaflet'
import { AdaxialStipule, AbaxialStipule, MarginStipule } from '../../characters/v1/Stipule'
import { Peduncle, CapitateInflorescence } from '../../characters/v1/Inflorescence'
import { Calyx, Corolla, Bracteole } from '../../characters/v1/Flower'
import { Stipe, Epicarp, Replum } from '../../characters/v1/Fruit'
import { Filaments } from '../../characters/v1/Androecium'
import { Ovary } from '../../characters/v1/Ginoecium'
import { Seed } from '../../characters/v1/Seed'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'


// Description of Mimosa humifusa
const Mimosa_humifusa = new Mimosa()
Mimosa_humifusa.specificEpithet = 'humifusa'

Mimosa_humifusa.stems = new Stems()

Mimosa_humifusa.stipule = new Stipule()
Mimosa_humifusa.stipule.margin = new MarginStipule()
Mimosa_humifusa.stipule.adaxial = new AdaxialStipule()
Mimosa_humifusa.stipule.abaxial = new AbaxialStipule()

Mimosa_humifusa.leaf = new Leaf()
Mimosa_humifusa.leaf.petiole = new Petiole()
Mimosa_humifusa.leaf.bipinnate = new Bipinnate()
Mimosa_humifusa.leaf.bipinnate.rachis = new Rachis()
Mimosa_humifusa.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_humifusa.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_humifusa.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_humifusa.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_humifusa.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_humifusa.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_humifusa.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(12, 24)
Mimosa_humifusa.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMax(25)
Mimosa_humifusa.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_humifusa.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_humifusa.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_humifusa.inflorescence = new Inflorescence()
Mimosa_humifusa.inflorescence.peduncle = new Peduncle()
Mimosa_humifusa.inflorescence.capitate = new CapitateInflorescence()

Mimosa_humifusa.flower = new Flower()
Mimosa_humifusa.flower.bracteole = new Bracteole()
Mimosa_humifusa.flower.merism = '4-merous'
Mimosa_humifusa.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_humifusa.flower.calyx = new Calyx()
Mimosa_humifusa.flower.calyx.shape = 'pappiform'
Mimosa_humifusa.flower.corolla = new Corolla()
Mimosa_humifusa.flower.corolla.shape = 'subtubular'

Mimosa_humifusa.androecium = new Androecium()
Mimosa_humifusa.androecium.filaments = new Filaments()

Mimosa_humifusa.ginoecium = new Ginoecium()
Mimosa_humifusa.ginoecium.ovary = new Ovary()

Mimosa_humifusa.fruit = new Fruit()
Mimosa_humifusa.fruit.stipe = new Stipe()
Mimosa_humifusa.fruit.replum = new Replum()
Mimosa_humifusa.fruit.epicarp = new Epicarp()

Mimosa_humifusa.seed = new Seed()


// Description authorship
Mimosa_humifusa.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_humifusa.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa humifusa
export { Mimosa_humifusa }