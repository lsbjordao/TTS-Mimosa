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


// Description of Mimosa supravisa
const Mimosa_supravisa = new Mimosa()
Mimosa_supravisa.specificEpithet = 'supravisa'

Mimosa_supravisa.stems = new Stems()

Mimosa_supravisa.stipule = new Stipule()
Mimosa_supravisa.stipule.margin = new MarginStipule()
Mimosa_supravisa.stipule.adaxial = new AdaxialStipule()
Mimosa_supravisa.stipule.abaxial = new AbaxialStipule()

Mimosa_supravisa.leaf = new Leaf()
Mimosa_supravisa.leaf.petiole = new Petiole()
Mimosa_supravisa.leaf.bipinnate = new Bipinnate()
Mimosa_supravisa.leaf.bipinnate.rachis = new Rachis()
Mimosa_supravisa.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_supravisa.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_supravisa.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(2, 4)
Mimosa_supravisa.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_supravisa.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_supravisa.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_supravisa.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_supravisa.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_supravisa.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_supravisa.inflorescence = new Inflorescence()
Mimosa_supravisa.inflorescence.peduncle = new Peduncle()
Mimosa_supravisa.inflorescence.capitate = new CapitateInflorescence()

Mimosa_supravisa.flower = new Flower()
Mimosa_supravisa.flower.bracteole = new Bracteole()
Mimosa_supravisa.flower.merism = '4-merous'
Mimosa_supravisa.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_supravisa.flower.calyx = new Calyx()
Mimosa_supravisa.flower.corolla = new Corolla()
Mimosa_supravisa.flower.corolla.shape = 'vase-shaped'

Mimosa_supravisa.androecium = new Androecium()
Mimosa_supravisa.androecium.filaments = new Filaments()
Mimosa_supravisa.androecium.filaments.colour = 'pinkish'

Mimosa_supravisa.ginoecium = new Ginoecium()
Mimosa_supravisa.ginoecium.ovary = new Ovary()

Mimosa_supravisa.fruit = new Fruit()
Mimosa_supravisa.fruit.stipe = new Stipe()
Mimosa_supravisa.fruit.replum = new Replum()
Mimosa_supravisa.fruit.epicarp = new Epicarp()

Mimosa_supravisa.seed = new Seed()


// Description authorship
Mimosa_supravisa.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_supravisa.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709351 
})


// Sources


// Export Mimosa supravisa
export { Mimosa_supravisa }