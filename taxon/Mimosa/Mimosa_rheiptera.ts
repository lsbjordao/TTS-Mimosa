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


// Description of Mimosa rheiptera
const Mimosa_rheiptera = new Mimosa()
Mimosa_rheiptera.specificEpithet = 'rheiptera'

Mimosa_rheiptera.stems = new Stems()

Mimosa_rheiptera.stipule = new Stipule()
Mimosa_rheiptera.stipule.margin = new MarginStipule()
Mimosa_rheiptera.stipule.adaxial = new AdaxialStipule()
Mimosa_rheiptera.stipule.abaxial = new AbaxialStipule()

Mimosa_rheiptera.leaf = new Leaf()
Mimosa_rheiptera.leaf.petiole = new Petiole()
Mimosa_rheiptera.leaf.bipinnate = new Bipinnate()
Mimosa_rheiptera.leaf.bipinnate.rachis = new Rachis()
Mimosa_rheiptera.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_rheiptera.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_rheiptera.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(33, 35)
Mimosa_rheiptera.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_rheiptera.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_rheiptera.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_rheiptera.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(3, 9)
Mimosa_rheiptera.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMax(11)
Mimosa_rheiptera.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_rheiptera.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_rheiptera.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_rheiptera.inflorescence = new Inflorescence()
Mimosa_rheiptera.inflorescence.peduncle = new Peduncle()
Mimosa_rheiptera.inflorescence.capitate = new CapitateInflorescence()

Mimosa_rheiptera.flower = new Flower()
Mimosa_rheiptera.flower.bracteole = new Bracteole()
Mimosa_rheiptera.flower.merism = '4-merous'
Mimosa_rheiptera.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_rheiptera.flower.calyx = new Calyx()
Mimosa_rheiptera.flower.corolla = new Corolla()

Mimosa_rheiptera.androecium = new Androecium()
Mimosa_rheiptera.androecium.filaments = new Filaments()
Mimosa_rheiptera.androecium.filaments.colour = 'pinkish'

Mimosa_rheiptera.ginoecium = new Ginoecium()
Mimosa_rheiptera.ginoecium.ovary = new Ovary()

Mimosa_rheiptera.fruit = new Fruit()
Mimosa_rheiptera.fruit.stipe = new Stipe()
Mimosa_rheiptera.fruit.replum = new Replum()
Mimosa_rheiptera.fruit.epicarp = new Epicarp()

Mimosa_rheiptera.seed = new Seed()


// Description authorship
Mimosa_rheiptera.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_rheiptera.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709351 
})


// Sources


// Export Mimosa rheiptera
export { Mimosa_rheiptera }