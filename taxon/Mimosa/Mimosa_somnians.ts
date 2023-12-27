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


// Description of Mimosa somnians
const Mimosa_somnians = new Mimosa()
Mimosa_somnians.specificEpithet = 'somnians'

Mimosa_somnians.stems = new Stems()

Mimosa_somnians.stipule = new Stipule()
Mimosa_somnians.stipule.margin = new MarginStipule()
Mimosa_somnians.stipule.adaxial = new AdaxialStipule()
Mimosa_somnians.stipule.abaxial = new AbaxialStipule()

Mimosa_somnians.leaf = new Leaf()
Mimosa_somnians.leaf.petiole = new Petiole()
Mimosa_somnians.leaf.bipinnate = new Bipinnate()
Mimosa_somnians.leaf.bipinnate.rachis = new Rachis()
Mimosa_somnians.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_somnians.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_somnians.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMin(1)
Mimosa_somnians.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(2, 13)
Mimosa_somnians.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMax(15)
Mimosa_somnians.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_somnians.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_somnians.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_somnians.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(10)
Mimosa_somnians.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(11, 17)
Mimosa_somnians.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_somnians.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_somnians.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_somnians.inflorescence = new Inflorescence()
Mimosa_somnians.inflorescence.peduncle = new Peduncle()
Mimosa_somnians.inflorescence.capitate = new CapitateInflorescence()

Mimosa_somnians.flower = new Flower()
Mimosa_somnians.flower.bracteole = new Bracteole()
Mimosa_somnians.flower.merism = ['4-merous', '5-merous']
Mimosa_somnians.flower.calyx = new Calyx()
Mimosa_somnians.flower.corolla = new Corolla()
Mimosa_somnians.flower.corolla.shape = 'turbinate'

Mimosa_somnians.androecium = new Androecium()
Mimosa_somnians.androecium.filaments = new Filaments()
Mimosa_somnians.androecium.filaments.colour = 'pinkish'

Mimosa_somnians.ginoecium = new Ginoecium()
Mimosa_somnians.ginoecium.ovary = new Ovary()

Mimosa_somnians.fruit = new Fruit()
Mimosa_somnians.fruit.stipe = new Stipe()
Mimosa_somnians.fruit.replum = new Replum()
Mimosa_somnians.fruit.epicarp = new Epicarp()

Mimosa_somnians.seed = new Seed()


// Description authorship
Mimosa_somnians.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_somnians.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa somnians
export { Mimosa_somnians }